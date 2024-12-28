import "semantic-ui-css/semantic.min.css";

import { Grid, Menu, MenuItem } from "semantic-ui-react";

import AppContextProvider from "./components/AppContext";
import type { Metadata } from "next";
import WorkoutSettingsForm from "./components/WorkoutSettingsForm";

export const metadata: Metadata = {
    title: "Push Pull Progress",
    description: "Push Pull Progress"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppContextProvider>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Menu>
                                    <MenuItem content="Push Pull Progress" icon="trophy" />
                                    <MenuItem position="right">
                                        <WorkoutSettingsForm />
                                    </MenuItem>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                {/* Main Content */}
                                {children}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </AppContextProvider>
            </body>
        </html>
    );
}
