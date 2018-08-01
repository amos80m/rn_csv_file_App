let navigation = null;

export const setNavigation = (navigationData) => {
    console.log('navigationData:',navigationData)
    navigation = navigationData;
};
export const MenueActions = (op) => {
    switch (op) {
        case 'o':
            navigation.openDrawer()
        break;
        case 't':
            navigation.toggleDrawer()
        break;
        case 'c':
            navigation.closeDrawer()
        break;
        default: navigation.openDrawer()
            break;
    }
}

export const goToPage = (pageName, params = {}, cb) => {
    console.log('navigationData:',navigation,'pageName: ',pageName)    
    navigation.navigate(pageName, params);
    MenueActions('c')
    if (cb) {
        cb(true);
    }
}
export const getLocation = (i1,i2) => {
    switch (i2) {
        case 0:
            return `A${i1}`
            break;
        case 1:
            return `B${i1}`
            break;
        case 2:
            return `C${i1}`
            break;
    }
}