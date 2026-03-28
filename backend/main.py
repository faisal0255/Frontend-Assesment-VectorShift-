from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[dict]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph
    graph = {}
    for node in nodes:
        graph[node['id']] = []

    for edge in edges:
        source = edge['source']
        target = edge['target']
        if source in graph:
            graph[source].append(target)

    visited = set()
    rec_stack = set()

    def is_cyclic(node):
        if node in rec_stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if is_cyclic(neighbor):
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if is_cyclic(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

   