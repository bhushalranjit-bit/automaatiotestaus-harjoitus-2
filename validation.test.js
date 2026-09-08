import { test } from "node:test";
import assert from "node:assert";

import {
  validateEmail,
  validatePassword,
  validateAge
} from "./validation.js";

test("validateEmail hylkää sähköpostin ilman @ merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");
  assert.strictEqual(result, false);
});

