import { decode } from '../../src/decode';

export const decodeSecretData = key => {
  return !key.includes('dds5588drYT') && decode(key);
};
