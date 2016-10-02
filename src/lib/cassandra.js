import cassandra from 'cassandra-driver'
import assert from 'assert'
const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'demo'})

client.connect(function (err) {
    assert.ifError(err)
})

export default client