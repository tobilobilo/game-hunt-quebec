import { Store } from "../types/store";

export function getAddress(store: Store | undefined): string {
    const adress = [];

    if(store?.address?.street) adress.push(store.address.street);
    if(store?.address?.city) adress.push(store.address.city);
    if(store?.address?.region) adress.push(store.address.region);

    return adress.join(', ');
}