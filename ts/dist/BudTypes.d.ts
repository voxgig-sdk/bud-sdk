export interface Account {
    account_type?: string;
    balance?: number;
    currency?: string;
    display_name?: string;
    id?: string;
    provider?: string;
}
export interface AccountLoadMatch {
    id: string;
}
export interface AccountListMatch {
    account_type?: string;
    balance?: number;
    currency?: string;
    display_name?: string;
    id?: string;
    provider?: string;
}
