export const loadState = () => {
    try {
        const cachedState = localStorage.getItem('state');
        if(cachedState)
            return JSON.parse(cachedState);
        else
            return undefined;
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const cachedState = JSON.stringify(state);
        localStorage.setItem('state', cachedState);
    } catch (error) {
        console.log("Error caching data");
    }
}