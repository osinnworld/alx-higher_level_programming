#!/usr/bin/python3
"""
a script that lists all State objects that contain the
letter a from the database hbtn_0e_6_usa
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sys import argv
from model_state import Base, State


if __name__ == "__main__":
    username = argv[1]
    passwd = argv[2]
    host = 'localhost'
    db = argv[3]
    connection = f'mysql+mysqldb://{username}:{passwd}@{host}:3306/{db}'
    engine = create_engine(connection)
    Session = sessionmaker(bind=engine)
    session = Session()

    states = session.query(State).filter(State.name.contains('a')).\
        order_by((State.id).asc())
    for state in states:
        print('{}: {}'.format(state.id, state.name))
