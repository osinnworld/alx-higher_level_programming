#!/usr/bin/python3
# 0-add_integer.py
"""" A module to add two numbers
This module performs the addition operation between two integer or float numbers,
"""


def add_integer(a, b=98):
    """
    Returns the integer addition of a and b
    """
    if type(a) is not int and type(a) is not float:
        raise TypeError("a must be an integer")
    if type(b) is not int and type(b) is not float:
        raise TypeError("b must be an integer")
    if type(a) is float:
        a = int(a)
    if type(b) is float:
        b = int(b)
    return a + b
