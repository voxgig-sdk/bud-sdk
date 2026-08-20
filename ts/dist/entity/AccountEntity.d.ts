import { BudEntityBase } from '../BudEntityBase';
import type { BudSDK } from '../BudSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch, AccountListMatch } from '../BudTypes';
declare class AccountEntity extends BudEntityBase<Account> {
    constructor(client: BudSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
    list(this: any, reqmatch?: AccountListMatch, ctrl?: Control): Promise<AccountEntity[]>;
}
export { AccountEntity };
