module.exports = {
    content: {
        version: '3.690.1',
        host: '0.0.0.0:8448', //use ngrok or other tunneler at port 8448 and put the generated url here, redo this step if patching stoped working
        port: '8080'
    },
    db: {
        host: 'localhost',
        name: 'crServer'
    },
    redis: {
        host: '0.0.0.0',
        port: 6379
    },
    network: {
        maxConnections: 1000
    },
    events: [
        {
            id: 100,
            name: '2v2 Button',
            startTime: 1503298800,
            endTime: 1523298800,
            visibleOn: 1503298800,
            type: 8,
            json: JSON.stringify({
                HideTimer: true,
                HidePopupTimer: true,
                ExtraGameModeChance: 0,
                GameMode: 'TeamVsTeamLadder',
                ExtraGameMode: 'None'
            })
        }
    ]
}