
const austria = require('../../../assets/icons/flags/austria.png')
const belgium = require('../../../assets/icons/flags/belgium.png')
const england = require('../../../assets/icons/flags/england.png')
const france = require('../../../assets/icons/flags/france.png')
const germany = require('../../../assets/icons/flags/germany.png')
const greece = require('../../../assets/icons/flags/greece.png')
const italy = require('../../../assets/icons/flags/italy.png')
const netherlands = require('../../../assets/icons/flags/netherlands.png')
const portugal = require('../../../assets/icons/flags/portugal.png')
const russia = require('../../../assets/icons/flags/russia.png')
const scotland = require('../../../assets/icons/flags/scotland.png')
const spain = require('../../../assets/icons/flags/spain.png')
const sweden = require('../../../assets/icons/flags/sweden.png')
const turkey = require('../../../assets/icons/flags/turkey.png')
const austria_bundesliga = require('../../../assets/icons/leagues/austria-bundesliga.png')
const belgium_cup = require('../../../assets/icons/leagues/belgium-belgian-cup.png')
const belgium_pro_league = require('../../../assets/icons/leagues/belgium-reserve-pro-league.png')
const england_lig_1 = require('../../../assets/icons/leagues/england-premier-league.png')
const england_lig_2 = require('../../../assets/icons/leagues/england-championship.png')
const england_lig_3 = require('../../../assets/icons/leagues/england-efl-league-one.png')
const england_lig_4 = require('../../../assets/icons/leagues/england-efl-league-two.png')
const england_cup_1 = require('../../../assets/icons/leagues/england-fa-cup.png')
const england_cup_2 = require('../../../assets/icons/leagues/england-league-cup.png')
const france_lig_1 = require('../../../assets/icons/leagues/france-ligue-1.png')
const france_lig_2 = require('../../../assets/icons/leagues/france-ligue-2.png')
const france_lig_nat = require('../../../assets/icons/leagues/france-national.png')
const france_cup_1 = require('../../../assets/icons/leagues/france-coupe-de-france.png')
const france_cup_2 = require('../../../assets/icons/leagues/france-coupe-de-la-ligue.png')
const germany_bundesliga = require('../../../assets/icons/leagues/germany-bundesliga.png')
const germany_bundesliga_2 = require('../../../assets/icons/leagues/germany-2-bundesliga.png')
const germany_dfb_pokal = require('../../../assets/icons/leagues/germany-dfb-pokal.png')
const greece_lig = require('../../../assets/icons/leagues/greece-super-league.png')
const italy_lig_1 = require('../../../assets/icons/leagues/italy-serie-a.png')
const italy_lig_2 = require('../../../assets/icons/leagues/italy-serie-b.png')
const italy_cup_1 = require('../../../assets/icons/leagues/italy-coppa-italia.png')
const netherlands_lig_1 = require('../../../assets/icons/leagues/netherlands-eredivisie.png')
const netherlands_lig_2 = require('../../../assets/icons/leagues/netherlands-eerste-divisie.png')
const netherlands_cup_1 = require('../../../assets/icons/leagues/netherlands-knvb-cup.png')
const portugal_lig_1 = require('../../../assets/icons/leagues/portugal-liga-nos.png')
const portugal_cup_1 = require('../../../assets/icons/leagues/portugal-portuguese-league-cup.png')
const russia_lig_1 = require('../../../assets/icons/leagues/russia-russian-premier-league.png')
const scotland_lig_1 = require('../../../assets/icons/leagues/scotland-premiership.png')
const scotland_lig_2 = require('../../../assets/icons/leagues/scotland-championship.png')
const scotland_lig_3 = require('../../../assets/icons/leagues/scotland-league-one.png')
const spain_lig_1 = require('../../../assets/icons/leagues/spain-la-liga.png')
const spain_lig_2 = require('../../../assets/icons/leagues/spain-segunda-division.png')
const spain_cup_1 = require('../../../assets/icons/leagues/spain-copa-del-rey.png')
const sweden_lig_1 = require('../../../assets/icons/leagues/sweden-allsvenskan.png')
const sweden_lig_2 = require('../../../assets/icons/leagues/sweden-superettan.png')
const sweden_lig_3 = require('../../../assets/icons/leagues/sweden-division-1.png')
const turkey_lig_1 = require('../../../assets/icons/leagues/turkey-super-lig.png')
const turkey_lig_2 = require('../../../assets/icons/leagues/turkey-1-lig.png')
const turkey_cup_1 = require('../../../assets/icons/leagues/turkey-turkish-cup.png')


export const countries = [
    'austria',
    'belgium',
    'england',
    'france',
    'germany',
    'greece',
    'italy',
    'netherlands',
    'portugal',
    'russia',
    'scotland',
    'spain',
    'sweden',
    'turkey'
]
export const leagues = [
    {
        'country': 'austria',
        'leagues': [
            { 'name': 'Bundesliga', 'id': null }
        ]
    },
    {
        'country': 'belgium',
        'leagues': [
            { 'name': 'Pro League', 'id': null },
            { 'name': 'Belgian Cup', 'id': null },
        ]
    },
    {
        'country': 'england',
        'leagues': [
            { 'name': 'Premier League', 'id': 2012 },
            { 'name': 'Championship', 'id': null },
            { 'name': 'EFL League One', 'id': null },
            { 'name': 'EFL League Two', 'id': null },
            { 'name': 'FA Cup', 'id': null },
            { 'name': 'League Cup', 'id': null },
        ]
    },
    {
        'country': 'france',
        'leagues': [
            { 'name': 'League 1', 'id': null },
            { 'name': 'League 2', 'id': null },
            { 'name': 'National League', 'id': null },
            { 'name': 'Coupe de League', 'id': null },
            { 'name': 'Coupe de France', 'id': null },
        ]
    },
    {
        'country': 'germany',
        'leagues': [
            { 'name': 'Bundesliga', 'id': null },
            { 'name': '2. Bundesliga', 'id': null },
            { 'name': 'DFL Pokal', 'id': null },
        ]
    },
    {
        'country': 'greece',
        'leagues': [
            { 'name': 'Super League', 'id': null }
        ]
    },
    {
        'country': 'italy',
        'leagues': [
            { 'name': 'Serie A', 'id': null },
            { 'name': 'Serie B', 'id': null },
            { 'name': 'Coppa Italia', 'id': null },
        ]
    },
    {
        'country': 'netherlands',
        'leagues': [
            { 'name': 'Eredivise', 'id': null },
            { 'name': 'Eerste Divisie', 'id': null },
            { 'name': 'KNVB Cup', 'id': null },
        ]
    },
    {
        'country': 'portugal',
        'leagues': [
            { 'name': 'Liga Nos', 'id': null },
            { 'name': 'Portuguese League Cup', 'id': null },
        ]
    },
    {
        'country': 'russia',
        'leagues': [
            { 'name': 'Premier League', 'id': null }
        ]
    },
    {
        'country': 'scotland',
        'leagues': [
            { 'name': 'Premiership', 'id': null },
            { 'name': 'Championship', 'id': null },
            { 'name': 'League One', 'id': null },
        ]
    },
    {
        'country': 'spain',
        'leagues': [
            { 'name': 'La Liga', 'id': null },
            { 'name': 'Segunda Division', 'id': null },
            { 'name': 'Copa del Rey', 'id': null },
        ]
    },
    {
        'country': 'sweden',
        'leagues': [
            { 'name': 'Allsvenskan', 'id': null },
            { 'name': 'Superettan', 'id': null },
            { 'name': 'Division 1', 'id': null },
        ]
    },
    {
        'country': 'turkey',
        'leagues': [
            { 'name': 'Super League', 'id': null },
            { 'name': '1. League', 'id': null },
            { 'name': 'Turkish Cup', 'id': null },
        ]
    },
]
export const symbol = (symbol) => {

    const symbolsCollection = {
        'austria': austria,
        'austria-Bundesliga': austria_bundesliga,
        'belgium': belgium,
        'belgium-Pro League': belgium_pro_league,
        'belgium-Belgian Cup': belgium_cup,
        'england': england,
        'england-Premier League': england_lig_1,
        'england-Championship': england_lig_2,
        'england-EFL League One': england_lig_3,
        'england-EFL League Two': england_lig_4,
        'england-FA Cup': england_cup_1,
        'england-League Cup': england_cup_2,
        'france': france,
        'france-League 1': france_lig_1,
        'france-League 2': france_lig_2,
        'france-National League': france_lig_nat,
        'france-Coupe de League': france_cup_1,
        'france-Coupe de France': france_cup_2,
        'germany': germany,
        'germany-Bundesliga': germany_bundesliga,
        'germany-2. Bundesliga': germany_bundesliga_2,
        'germany-DFL Pokal': germany_dfb_pokal,
        'greece': greece,
        'greece-Super League': greece_lig,
        'italy': italy,
        'italy-Serie A': italy_lig_1,
        'italy-Serie B': italy_lig_2,
        'italy-Coppa Italia': italy_cup_1,
        'netherlands': netherlands,
        'netherlands-Eredivise': netherlands_lig_1,
        'netherlands-Eerste Divisie': netherlands_lig_2,
        'netherlands-KNVB Cup': netherlands_cup_1,
        'portugal': portugal,
        'portugal-Liga Nos': portugal_lig_1,
        'portugal-Portuguese League Cup': portugal_cup_1,
        'russia': russia,
        'russia-Premier League': russia_lig_1,
        'scotland': scotland,
        'scotland-Premiership': scotland_lig_1,
        'scotland-Championship': scotland_lig_2,
        'scotland-League One': scotland_lig_3,
        'spain': spain,
        'spain-La Liga': spain_lig_1,
        'spain-Segunda Division': spain_lig_2,
        'spain-Copa del Rey': spain_cup_1,
        'sweden': sweden,
        'sweden-Allsvenskan':sweden_lig_1,
        'sweden-Superettan':sweden_lig_2,
        'sweden-Division 1':sweden_lig_3,
        'turkey': turkey,
        'turkey-Super League':turkey_lig_1,
        'turkey-1. League':turkey_lig_2,
        'turkey-Turkish Cup':turkey_cup_1,
    };

    if (symbolsCollection.hasOwnProperty(symbol)) return symbolsCollection[symbol];
    else return 'default symbol';

}