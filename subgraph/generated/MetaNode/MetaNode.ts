// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class certifcateRequested extends ethereum.Event {
  get params(): certifcateRequested__Params {
    return new certifcateRequested__Params(this);
  }
}

export class certifcateRequested__Params {
  _event: certifcateRequested;

  constructor(event: certifcateRequested) {
    this._event = event;
  }
}

export class MetaNode extends ethereum.SmartContract {
  static bind(address: Address): MetaNode {
    return new MetaNode("MetaNode", address);
  }

  certificates(param0: BigInt): string {
    let result = super.call("certificates", "certificates(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_certificates(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "certificates",
      "certificates(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  entitydomain(): string {
    let result = super.call("entitydomain", "entitydomain():(string)", []);

    return result[0].toString();
  }

  try_entitydomain(): ethereum.CallResult<string> {
    let result = super.tryCall("entitydomain", "entitydomain():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  entityname(): string {
    let result = super.call("entityname", "entityname():(string)", []);

    return result[0].toString();
  }

  try_entityname(): ethereum.CallResult<string> {
    let result = super.tryCall("entityname", "entityname():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _entityName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _entityDomain(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CertifyCall extends ethereum.Call {
  get inputs(): CertifyCall__Inputs {
    return new CertifyCall__Inputs(this);
  }

  get outputs(): CertifyCall__Outputs {
    return new CertifyCall__Outputs(this);
  }
}

export class CertifyCall__Inputs {
  _call: CertifyCall;

  constructor(call: CertifyCall) {
    this._call = call;
  }
}

export class CertifyCall__Outputs {
  _call: CertifyCall;

  constructor(call: CertifyCall) {
    this._call = call;
  }

  get _certfificate(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class RequestCertificationCall extends ethereum.Call {
  get inputs(): RequestCertificationCall__Inputs {
    return new RequestCertificationCall__Inputs(this);
  }

  get outputs(): RequestCertificationCall__Outputs {
    return new RequestCertificationCall__Outputs(this);
  }
}

export class RequestCertificationCall__Inputs {
  _call: RequestCertificationCall;

  constructor(call: RequestCertificationCall) {
    this._call = call;
  }
}

export class RequestCertificationCall__Outputs {
  _call: RequestCertificationCall;

  constructor(call: RequestCertificationCall) {
    this._call = call;
  }

  get _certifyingEntityAddress(): string {
    return this._call.outputValues[0].value.toString();
  }
}
