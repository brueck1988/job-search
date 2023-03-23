import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav, {
			data( { 
				return {
					company: "Super Corp",
				}
			})
		});
    const companyName = screen.getByText("Tesla Careers");
    expect(companyName).toBeInTheDocument();
  });
});
