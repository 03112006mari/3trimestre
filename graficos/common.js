const getcss = (variavel) => {
    const boryStyles= getComputedstyle(document.bory)
    return boryStyles.getPropertyvalue(variavel)
    }
    const tickConfig = {
        family: getCSS('--font'),
         size: 16, 
         color: getCSS('--primary-color')
    }
     export {getCSS, tickConfig}