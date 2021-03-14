import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

import db from '../config/firebase'
import ResponseComp from '../ResponseComp'
import './FetchComp.css'

function FetchComp({ messageData, scrollIntoView, actionProvider }) {
    const [data, setData] = useState({})

    useEffect(() => {
        db.collection('keywords')
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    // checking if the main keyword matches
                    if (messageData.includes(doc.id.toLowerCase().trim())) {
                        setData({ mainKeyword: doc.id, ...doc.data() })
                        throw 'FOUND'
                    }
                    // checking for support keywords
                    doc.data().supportKeywords.map((keyword) => {
                        if (messageData.includes(keyword.toLowerCase().trim())) {
                            setData({ mainKeyword: doc.id, ...doc.data() })
                            throw 'FOUND'
                        }
                    })
                    // if no match found
                    setData({
                        message: 'Please ask something relevant.',
                    })
                })
            })
            .catch((err) => console.log(err))
    }, [])

    // to collect queries in database
    useEffect(() => {
        db.collection('queries').add({
            query: messageData,
            count: 1,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }, [])

    // to collect the timestamps  ONLY for the Graph
    useEffect(() => {
        db.collection('graph').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }, [])

    scrollIntoView()

    return (
        data && (
            <ResponseComp
                {...data}
                scrollIntoView={scrollIntoView}
                actionProvider={actionProvider}
            />
        )
    )
}

export default FetchComp
