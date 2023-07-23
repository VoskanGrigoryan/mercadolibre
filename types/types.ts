import { ChangeEvent } from "react";

export type EvenInput = ChangeEvent<HTMLInputElement>;

export type TInstallments = {
  amount: number;
  currency_id: string;
};

export type TAddress = {
  city_name: string;
  state_name: string;
};
