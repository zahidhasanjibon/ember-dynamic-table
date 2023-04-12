import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import db from '../db.js/db';
export default class DashboardController extends Controller {
  @service store;
  @tracked data = {
    id: 'zakat',
    tableColumn: [
      'ID',
      'name',
      'address',
      'phone',
      'country',
      'lan',
      'money',
      'book',
      'pen',
      'apple',
    ],
    data: [
      {
        _id: 1,
        name: 'md karim',
        address: 'dhaka',
        phone: '01732432',
        country: 'bangladesh',
        lan: 'edwsss',
        money: '2323',
        book: '234',
        pen: 'werw',
        apple: 'effa',
      },
      {
        _id: 2,
        name: 'md rahim',
        address: 'dhaka',
        phone: '01732432',
        country: 'bangladesh',
        lan: 'ed',
        money: '2323',
        book: '234',
        pen: 'werw',
        apple: 'effa',
      },
      {
        _id: 3,
        name: 'md kamal',
        address: 'dhaka',
        phone: '01732432',
        country: 'london',
        lan: 'ed',
        money: '2323',
        book: '234',
        pen: 'werw',
        apple: 'effa',
      },
    ],
  };

  @action getZakatTakerData(nameOfdataToFind) {
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
  @action getLoanData(nameOfdataToFind) {
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
  @action getEducationData(nameOfdataToFind) {
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
  @action getMedicalData(nameOfdataToFind) {
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
  @action getFamilyData(nameOfdataToFind) {
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
