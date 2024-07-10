export type BaseLinkerMethods =
  | "addOrder"
  | "getOrders"
  | "getOrderExtraFields"
  | "getOrderTransactionData"
  | "getOrdersByEmail"
  | "getOrdersByPhone"
  | "addInvoice"
  | "getInvoices"
  | "getSeries"
  | "getOrderStatusList"
  | "getOrderPaymentsHistory"
  | "getOrderPickPackHistory"
  | "getNewReceipts"
  | "getReceipt"
  | "setOrderFields"
  | "addOrderProduct"
  | "setOrderProductFields"
  | "deleteOrderProduct"
  | "setOrderPayment"
  | "setOrderStatus"
  | "setOrderStatuses"
  | "setOrderReceipt"
  | "addOrderInvoiceFile"
  | "addOrderReceiptFile"
  | "getInvoiceFile"
  | "runOrderMacroTrigger"
  | "getProductsData";

export interface BaseLinkerResponse {
  status: string;
  error_message?: string;
  error_code?: string;
  [key: string]: any; // Additional fields based on method
}

export interface FetchParams {
  method: BaseLinkerMethods;
  parameters?: any;
}
