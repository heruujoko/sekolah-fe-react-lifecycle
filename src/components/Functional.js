import React, { useEffect, useState } from 'react';

const Func = () => {
    const [count, setCount] = useState(0);

    // componentDidUpdate & componentDidMount
    useEffect(() => {
        // TODO
    });

    // componentDidMount
    useEffect(() => {
        // TODO
    }, []);

    // componentDidUpdate (only count)
    useEffect(() => {
        // TODO
    }, [count]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            // TODO
        }
    });
}

export default Func;