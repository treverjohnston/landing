import { date } from 'quasar'

export function setRawReportData(state, rawReportData) {
    rawReportData.forEach(element => {
        let extractedString = date.extractDate(element.createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
        let formattedString = date.formatDate(extractedString, 'YYYY-MM-DD --- HH:mm')
        element.createdAt = formattedString;
    });
    state.reports = rawReportData.reverse();
}

