import React from 'react';
import {Alert} from 'react-native';
import {resetError} from "../../store/actions/GetTeams/resetError";
import {connect} from "react-redux";

const AnnouncementsAlert = (props) => {
  const reset=async()=>{
    await props.resetError()
    await props.navigate.goBack()
  }
  const alert = (data) =>
    Alert.alert(
      data.title,
      data.description,
      [
        {text: "Geri Dön", onPress: () => reset()}
      ],
      {cancelable: false}
    );
  return (<>{props.data && alert(props.data[0])}</>);
};


const mapStateToProps = (state) => ({
  teamsReducer: state.teams
});

const mapDispatchToProps = {resetError};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementsAlert);

