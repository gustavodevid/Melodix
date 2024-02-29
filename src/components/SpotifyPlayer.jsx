import React, { useState, useEffect } from 'react';
import { fetchToken } from '../js/script';

const SpotifyPlayer = () => {
    const [token, setToken] = useState('');
    const clientId = '879496c5b323472bbd08843975309a97';
    const clientSecret = 'b8108264c4fa4a2d9b90d62720d065b9';
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchToken(clientId, clientSecret)
            .then(response => setToken(response.access_token))
            .catch(err => setError(err));
    }, []);

    useEffect(() => {
        if (!token) return; // Verifica se o token está disponível antes de tentar conectar o player

        const trackUri = 'spotify:track:2YlZnw2ikdb837oKMKjBkW'; // URI da música que você deseja reproduzir

        // Autenticação com o Spotify
        window.onSpotifyWebPlaybackSDKReady = () => {
            // Inicialize o player
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK Example Player',
                getOAuthToken: cb => { cb(token); }
            });

            player.connect().then(success => {
                if (success) {
                    console.log('Conectado com sucesso ao Spotify!');
                } else {
                    console.error('Falha na conexão com o Spotify.');
                }
            });

            // Evento de mudança de estado do player
            player.addListener('player_state_changed', state => {
                console.log('Estado do player alterado:', state);
            });

            // Reproduzir uma música
            player.play(trackUri);
        };
    }, [token]); // Adicione o token como dependência para garantir que o player seja inicializado após o token ser obtido

    return (
        <div>
            <h1>Spotify Player</h1>
            {/* Adicione qualquer conteúdo adicional desejado aqui */}
        </div>
    );
};

export default SpotifyPlayer;
