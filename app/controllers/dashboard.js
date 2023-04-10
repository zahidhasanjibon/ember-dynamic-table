import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import db from '../db.js/db';
export default class DashboardController extends Controller {
  @service store;
  @tracked data = {
    id: 'zakat',
    tableColumn: ['ID', 'Name', 'address', 'phone', 'country'],
    data: [
      {
        _id: 1,
        name: 'md karim',
        address: 'dhaka',
        phone: '01732432',
        country: 'bangladesh',
      },
      {
        _id: 2,
        name: 'md rahim',
        address: 'dhaka',
        phone: '01732432',
        country: 'bangladesh',
      },
      {
        _id: 3,
        name: 'md kamal',
        address: 'dhaka',
        phone: '01732432',
        country: 'london',
      },
    ],
  };

  @action async getZakatTakerData(nameOfdataToFind) {
    const findedData = db.find(
      (singleData) => singleData.id === nameOfdataToFind
    );
    this.data = findedData;
    let table = document.querySelector('table');
    table.classList.remove('fadde');
    setTimeout(() => {
      table.classList.add('fadde');
    }, 20);
  }
  @action async getLoanData(nameOfdataToFind) {
    const findedData = db.find(
      (singleData) => singleData.id === nameOfdataToFind
    );
    this.data = findedData;
    let table = document.querySelector('table');
    table.classList.remove('fadde');
    setTimeout(() => {
      table.classList.add('fadde');
    }, 20);
  }
  @action async getEducationData(nameOfdataToFind) {
    const findedData = db.find(
      (singleData) => singleData.id === nameOfdataToFind
    );
    this.data = findedData;
    let table = document.querySelector('table');
    table.classList.remove('fadde');
    setTimeout(() => {
      table.classList.add('fadde');
    }, 20);
  }
  @action async getMedicalData(nameOfdataToFind) {
    const findedData = db.find(
      (singleData) => singleData.id === nameOfdataToFind
    );
    this.data = findedData;
    let table = document.querySelector('table');
    table.classList.remove('fadde');
    setTimeout(() => {
      table.classList.add('fadde');
    }, 20);
  }
  @action async getFamilyData(nameOfdataToFind) {
    const findedData = db.find(
      (singleData) => singleData.id === nameOfdataToFind
    );
    this.data = findedData;
    let table = document.querySelector('table');
    table.classList.remove('fadde');
    setTimeout(() => {
      table.classList.add('fadde');
    }, 20);
  }
}
