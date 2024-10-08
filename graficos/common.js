const getcss = (variavel) => {
    return getcomputedstyle(document.body)-getPropertyvalue(variavel)
    }
    const tickConfig = {
        family: getcss('--font'),
         size: 16, 
         color: getcss('--primary-color')
    }
     export {getcss}