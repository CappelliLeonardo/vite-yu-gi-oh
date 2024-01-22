// prendo la proprietà reactive dall'oggetto vue
import {reactive} from 'vue';
// esporto la proprieta reactive  tramite const (rendo
// disponibile la const store che ha la proprietà reactive)
export  const store = reactive({
    cardLists: [],
});
