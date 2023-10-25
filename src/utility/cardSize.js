function getCardSize(score) {
    if (score < 30) {
        return 'card-small';
    } else if (score >= 31 && score <= 70) {
        return 'card-medium';
    } else {
        return 'card-large';
    }
}

export default getCardSize;
