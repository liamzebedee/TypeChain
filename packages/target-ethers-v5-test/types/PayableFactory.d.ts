/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PayableFactoryInterface extends ethers.utils.Interface {
  functions: {
    "newPayable()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "newPayable",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "newPayable", data: BytesLike): Result;

  events: {};
}

export class PayableFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PayableFactoryInterface;

  functions: {
    newPayable(overrides?: Overrides): Promise<ContractTransaction>;

    "newPayable()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  newPayable(overrides?: Overrides): Promise<ContractTransaction>;

  "newPayable()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    newPayable(overrides?: CallOverrides): Promise<string>;

    "newPayable()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    newPayable(overrides?: Overrides): Promise<BigNumber>;

    "newPayable()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    newPayable(overrides?: Overrides): Promise<PopulatedTransaction>;

    "newPayable()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
