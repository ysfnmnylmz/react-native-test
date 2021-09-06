import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native";
import {getMatches} from '../store/actions/GetMatches'
import {connect, useStore} from "react-redux";
import {Loader, MatchCard} from "./Common";


const MatchList = (props) => {
    const [state, setState] = useState(false)
    const store = useStore();
    const {matchesReducer} = store.getState()
    const _fetchDatas = async () => {
        await props.getMatches()
        await setState(true)
    }
    useEffect(() => {
        _fetchDatas()
    }, [])
    if (state) {
        return (
            <ScrollView>
                {matchesReducer.data.map((m, i) => <MatchCard match={m} key={String(i)}/>)}
            </ScrollView>
        );
    } else {
        return (<Loader/>)
    }
};

const mapStateToProps = (state) => ({
    leaguesReducer: state.leagues,
    matchesReducer: state.matches,
    teamsReducer: state.teams
});
const mapDispatchToProps = {getMatches};

export default connect(mapStateToProps, mapDispatchToProps)(MatchList);


const styles = {
    board: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '20%',
        marginHorizontal: 10
    },
    score: {
        fontSize: 55,
        color: '#333'
    },
    teamLogo: {
        width: 100,
        height: 100
    }
}
