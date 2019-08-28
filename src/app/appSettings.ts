export class AppSettings {
    public static API_ENDPOINT = 'https://api.punkapi.com/v2/';
    public static ALL_BEERS = AppSettings.API_ENDPOINT + 'beers';
    public static ALL_BEERS_BY_NAME = AppSettings.ALL_BEERS + '?beer_name=';

    public static SESSION_STORE_FAV_KEY = 'favourites';
 }