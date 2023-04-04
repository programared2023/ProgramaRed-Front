const queryCreator = (search) => {
    let words = search.split(" ");
    let querys = [];
    // console.log(words)
    for(let i=0; i<words.length; i++){
        let query = ""
        query += `username=${words[i]}&tag=${words[i]}`
        querys.push(query)
    }
    return querys;
}

// console.log(queryCreator("ailin sergio javascript"))

export default queryCreator;

