#!/usr/bin/python3
"""
a script that lists all State objects
from the database hbtn_0e_6_usa
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sys import argv
from model_state import Base, State

if __name__ == "__main__":
    """
    Access to the database and get the states
    from the database.
    """
    username = argv[1]
    password = argv[2]
    database = argv[3]
    host = "localhost"
    connection = (
            f'mysql+mysqldb://{username}:{password}@{host}:3306/'
            f'{database}'
            )
    engine = create_engine(connection)
    Session = sessionmaker(bind=engine)
    session_1 = Session()

    state = session_1.query(State).first()
    if state is None:
        print('Nothing')
    else:
        print('{}: {}'.format(state.id, state.name))
