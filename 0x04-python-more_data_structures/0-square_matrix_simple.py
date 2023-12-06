#!/usr/bin/python3
def square_matrix_simple(matrix=None):
    if matrix is None:
        matrix = []

    new_matrix = [[] for _ in range(len(matrix))]
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            squared_value = matrix[i][j] * matrix[i][j]
            new_matrix[i].append(squared_value)
        return new_matrix
