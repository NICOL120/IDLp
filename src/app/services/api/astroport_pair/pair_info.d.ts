/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This enum describes available Token types. ## Examples ``` # use cosmwasm_std::Addr; # use astroport::asset::AssetInfo::{NativeToken, Token}; Token { contract_addr: Addr::unchecked("terra...") }; NativeToken { denom: String::from("uluna") }; ```
 */
export type AssetInfo =
  | {
      token: {
        contract_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      native_token: {
        denom: string;
        [k: string]: unknown;
      };
    };
/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr = string;
/**
 * This enum describes available pair types. ## Available pool types ``` # use astroport::factory::PairType::{Custom, Stable, Xyk}; Xyk {}; Stable {}; Custom(String::from("Custom")); ```
 */
export type PairType =
  | {
      xyk: {
        [k: string]: unknown;
      };
    }
  | {
      stable: {
        [k: string]: unknown;
      };
    }
  | {
      custom: string;
    };

/**
 * This structure stores the main parameters for an Astroport pair
 */
export interface PairInfo {
  /**
   * Asset information for the two assets in the pool
   */
  asset_infos: [AssetInfo, AssetInfo];
  /**
   * Pair contract address
   */
  contract_addr: Addr;
  /**
   * Pair LP token address
   */
  liquidity_token: Addr;
  /**
   * The pool type (xyk, stableswap etc) available in [`PairType`]
   */
  pair_type: PairType;
  [k: string]: unknown;
}
