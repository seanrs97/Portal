import React from "react";
import {Link, Route} from "react-router-dom";
import Writer from "./Writer";

export default ({match: {url}, writers}) =>
    <React.Fragment>
        <ul>
            {writers.map(({ id, name }) =>
                <li key = {id}>
                    <Link to = {`${url}/${id}`}> {name}</Link>
                </li>
            )}
        </ul>
        <Route exact path = {url} render = {() => <h1> please select a writer </h1>}/>
        <Route path = {`${url}/:writerId`} render = {
            ({ match }) => <Writer {...writers.find(writer => writer.id === match.params.writerId)}/>}/>
    </React.Fragment>