import React, {useEffect, useState} from 'react';
import {useStore, connect} from 'react-redux';
import {Card, CardItem, Body} from 'native-base';
import {Text, View, ScrollView, Image} from 'react-native';
import {getPreMatches} from '../../store/actions/GetPreMatches';
import moment from 'moment';
import 'moment/locale/tr';
import {Loader} from "../Common";

moment.locale('tr');

const PreviousResults = (props) => {
  const [preMatches, setPrematches] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function compare(a, b) {
    const bandA = a.date_unix;
    const bandB = b.date_unix;

    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

  const {away, home, id} = props;
  const store = useStore();
  const {preMatchesReducer} = store.getState()
  useEffect(() => {
    props.getPreMatches(id).then(response => {
      setPrematches(Array.isArray(preMatchesReducer) ? preMatchesReducer.sort(compare) : null);
      setLoading(false)
    });
  }, [isLoading])
  if (isLoading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <ScrollView>
        {preMatches ? preMatches.map((preMatch, i) => {
          if (i <= 9) {
            if (preMatch.team_a_id === home.id) {
              return (
                <Card key={String(preMatch.id)}>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                    paddingBottom: 10
                  }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Image style={{width: 30, height: 30}} source={{uri: `${home.image}`}}/>
                      <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{home.name}</Text>
                      </Body>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12}}>{moment.unix(preMatch.date_unix).format('MMM D YYYY')}</Text>
                        <Text style={{fontSize: 12}}>{moment.unix(preMatch.date_unix).format('HH:mm')}</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text note style={{fontSize: 14, marginRight: 10}}>{preMatch.team_a_goals}</Text>
                        <Text note style={{fontSize: 8}}>-</Text>
                        <Text note style={{fontSize: 14, marginLeft: 10}}>{preMatch.team_b_goals}</Text>
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{away.name}</Text>
                      </Body>
                      <Image style={{width: 30, height: 30}} source={{uri: `${away.image}`}}/>
                    </View>
                  </CardItem>
                </Card>
              )
            } else {
              return (
                <Card key={String(preMatch.id)}>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                    paddingBottom: 10
                  }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Image style={{width: 30, height: 30}} source={{uri: `${away.image}`}}/>
                      <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{away.name}</Text>
                      </Body>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12}}>{moment.unix(preMatch.date_unix).format('MMM D YYYY')}</Text>
                        <Text style={{fontSize: 12}}>{moment.unix(preMatch.date_unix).format('HH:mm')}</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text note style={{fontSize: 14, marginRight: 10}}>{preMatch.team_a_goals}</Text>
                        <Text note style={{fontSize: 14}}>-</Text>
                        <Text note style={{fontSize: 14, marginLeft: 10}}>{preMatch.team_b_goals}</Text>
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{home.name}</Text>
                      </Body>
                      <Image style={{width: 30, height: 30}} source={{uri: `${home.image}`}}/>
                    </View>
                  </CardItem>
                </Card>
              )
            }
          }
        }):
          <Text>Bu maç için form bilgisi bulunmamaktadır.</Text>}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  preMatchesReducer: state.preMatches
});

const mapDispatchToProps = {getPreMatches};


export default connect(mapStateToProps, mapDispatchToProps)(PreviousResults);
