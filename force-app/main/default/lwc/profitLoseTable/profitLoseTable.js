import { LightningElement, wire } from 'lwc';
import getWrappedData from "@salesforce/apex/Calculator.getWrappedContactData";

export default class ProfitLoseTable extends LightningElement {
    data;
    columns = [
        { label : 'Amount Spent', fieldName : 'totalAmountSpent', type : 'currency' },
        { label : 'Profit', fieldName : 'profit', type : 'currency'},
        { label : 'Cost', fieldName : 'cost', type : 'currency' }
    ]
    
    @wire(getWrappedData)
    wiredData({error, data}) {
        this.data = data;
        console.log(this.data);
    }
}