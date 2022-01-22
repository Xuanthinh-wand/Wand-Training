const order = (name, address, phone, note, cart, status) => ({
  type: "ORDER",
  payload: {
    name,
    address,
    phone,
    note,
    cart,
    status,
  },
});

const settingOrder = (id, dataOrder) => ({
  type: "SETTING_ORDER",
  payload: {
    id,
    dataOrder,
  },
});
export { order, settingOrder };
