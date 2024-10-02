import React, { useState, useEffect } from 'react';
import './style/PLMatches.css';
import axios from "axios";

const PLMatches = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiUrl = 'https://livescore-api.com/api-client/matches/live.json?&key=G1q6XuLagKTyJhlh&secret=GLBbFcPIhYpt2NzJP0QMvBXLlQj47FmO';

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get(apiUrl);
                console.log(response.data.data.match);
                setMatches(response.data.data.match);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching match data:', error);
                setLoading(false);
            }
        };

        fetchMatches();
    }, [apiUrl]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Live Matches</h1>

    <div className="container-display">

            {matches.map((match) => {
                const statusClass = match.status === 'FINISHED'
                    ? 'completed'
                    : match.status === 'IN PLAY'
                        ? 'live'
                        : 'upcoming';

                return (
                    <div key={match.id} className={`match ${statusClass}`}>
                        <div>
                            <h2>{match.home.name} vs {match.away.name}</h2>
                            <p>Score: {match.scores.score}</p>
                            <p>Half-Time Score: {match.scores.ht_score}</p>
                            <p>Status: {match.status}</p>
                            <p>Location: {match.location}</p>
                            <p>Scheduled: {match.scheduled}</p>
                            <p>Last Changed: {match.last_changed}</p>
                            <p>Competition: {match.competition.name} ({match.competition.is_cup ? 'Cup' : 'League'})</p>
                            <p>Home Stadium: {match.home.stadium}</p>
                            {/*<p>Away Stadium: {match.away.stadium}</p>*/}
                            {/*<p>Odds (Live): {JSON.stringify(match.odds.live)}</p>*/}
                            {/*<p>Odds (Pre): {JSON.stringify(match.odds.pre)}</p>*/}
                            <p>Extra Time: {match.outcomes.extra_time}</p>
                            <p>Full Time Outcome: {match.outcomes.full_time}</p>
                            <p>Half Time Outcome: {match.outcomes.half_time}</p>
                            <p>Penalties: {match.outcomes.penalty_shootout}</p>
                        </div>
                        <div className="logos">
                            {/* Check if logos exist before rendering */}
                            {/*{match.home.logo && <img src={match.home.logo} alt={`${match.home.name} logo`} />}*/}
                            {/*{match.away.logo && <img src={match.away.logo} alt={`${match.away.name} logo`} />}*/}
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}



                        export default PLMatches;
