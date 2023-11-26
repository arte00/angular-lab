import { Injectable } from '@angular/core';
import {HousingLocation} from "../housing-location/housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'http://localhost:45586/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.baseUrl);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return await data.json() ?? {};
  }


}
