const PROXY_CONFIG  = [
        {
            context:        [
                "/socket.io/**"
            ],
            target:         "ws://pug-emea.server",
            changeOrigin:   true,
            secure:         false,
            ws:             true
        },
        {
            context:        [
                "/auth/**",
                "/custom/**",
                "/data/**",
                "/print/**"
            ],
            target:         "http://pug-emea.server",
            changeOrigin:   true,
            secure:         false
        }
    ];

module.exports      = PROXY_CONFIG;
