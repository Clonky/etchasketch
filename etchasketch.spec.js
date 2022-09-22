test("Should check that proper row of divs is created", () => {
    const row = generateRow(10);
    expect(row.childNodes.length).toBe(10);
})