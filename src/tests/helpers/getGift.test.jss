import { getGift } from "../../helpers/getGifs";

describe("testing <getGift /> component", () => {
  test("It shlould return 12 img", async () => {
    const gif = await getGift("vader");

    expect(gif).toBe(12);
  });

  test("Must to return 0 img", async () => {
    const gif = await getGift();

    expect(gif.length).toBe(0);
  });
});
