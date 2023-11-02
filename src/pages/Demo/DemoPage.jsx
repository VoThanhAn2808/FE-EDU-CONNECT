import { Table, TableBody, TableContainer, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Iframe from "react-iframe";

function DemoPage() {
    return (
        <Box>
            <Box>
                <TableContainer>
                    <Table sx={{ width: '100%', height: '100vh', textAlign: 'center', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                        <TableRow>
                            <TableBody sx={{ verticalAlign: 'top', textAlign: 'center', backgroundColor: 'white',}}>
                                <Iframe src="https://www.vascak.cz/data/android/physicsatschool/canvas/kv_skladani_kmitani_3_Canvas.html?l=fr" styles={{
                                    height: 'calc(90vh - 33px)',
                                    width: 'calc(1.6 * (110vh - 33px))',
                                    border: '1px solid silver',
                                }}></Iframe>
                            </TableBody>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default DemoPage;