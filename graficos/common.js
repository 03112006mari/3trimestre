const getcss = (variavel) => {
    return getcomputedstyle(document.body)-getPropertyvalue(variavel)
    }
     export {getcss}