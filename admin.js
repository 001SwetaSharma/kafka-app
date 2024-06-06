const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log('Connecting Admin...');
    admin.connect();
    console.log('Admin Connected Successfully');

    console.log('Creating Topic rider-updates');
    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2
            }
        ]
    });
    console.log('Topic rider-updates created');

    console.log('Disconnecting Admin...');
    admin.disconnect();
}

init();