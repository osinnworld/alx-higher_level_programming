#!/usr/bin/python3
"""
a script that prints the State object with the name
passed as argument from the database
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
    STATE = argv[4]
    connection = f'mysql+mysqldb://{username}:{passwd}@{host}:3306/{db}'
    engine = create_engine(connection)
    Session = sessionmaker(bind=engine)
    session = Session()

    state = session.query(State).filter(State.name == STATE).first()
    if state is None:
        print('Not found')
    else:
        print(state.id)
