import React from "react";
import { Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const timetable = [
    { times: '8:00 - 10:45' },
    { times: '13:00 - 14:45' },
    { times: '15:00 - 17:45' },
    { times: '16:00 - 18:45' },
    { times: '19:00 - 21:45' },
];

const scheduleData = [
    { time: '8:00 - 10:45', subject: 'Toán', url: 'https://meet.google.com/bhx-kpai-adp', day: 'Thứ 2' },
    { time: '13:00 - 14:45', subject: '', url: '', day: 'Thứ 3' },
    { time: '15:00 - 17:45', subject: 'Toán', url: 'ds', day: 'Thứ 4' },
    { time: '16:00 - 18:45', subject: '', url: '', day: 'Thứ 5' },
    { time: '19:00 - 21:45', subject: '', url: '', day: 'Thứ 6' },
];

const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

function CalendarStudent() {
    return (
        <Box sx={{ marginBottom: "50px" }}>
            <Box>
                <Typography sx={{ fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign: "center", marginTop: "100px" }}>Nguyễn Văn A</Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "cursive", fontWeight: "700", textAlign: "center", marginTop: "10px" }}>Mã Số Học Sinh: 123</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'gray', width: '980px', marginLeft: 'auto', borderRadius: '20%', marginRight: 'auto', marginTop: "30px" }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ padding: '20px 45px', backgroundColor: '#71C763' }}></TableCell>
                                {daysOfWeek.map((day) => (
                                    <TableCell key={day} sx={{ padding: '20px 40px', fontSize: '15px', fontFamily: 'cursive', backgroundColor: '#71C763' }}>{day}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {timetable.map((itime) => (
                                <TableRow key={itime.times}>
                                    <TableCell sx={{ border: '1px solid #000000', width: '140px', height: '100px', backgroundColor: '#71C763', color: 'white', textAlign: 'center', fontSize: '15px', fontFamily: 'cursive' }}>{itime.times}</TableCell>
                                    {daysOfWeek.map((day) => {
                                        const item = scheduleData.find((data) => data.day === day && data.time === itime.times);
                                        return (
                                            <TableCell key={day} sx={{ border: '1px solid #000000', width: '140px', height: '100px' }}>
                                                {item && (
                                                    <>
                                                        {item.subject && (
                                                            <Typography sx={{ fontSize: '20px', fontFamily: 'cursive', fontWeight: '800', textAlign: 'center' }}>{item.subject}</Typography>
                                                        )}
                                                        {item.url && (
                                                            <Link sx={{ fontSize: '15px', fontFamily: 'cursive', fontWeight: '200', textAlign: 'center', marginLeft: '10px', textDecoration: 'none' }} href={item.url} target="_blank" rel="noopener noreferrer">
                                                                Meet-URL
                                                            </Link>
                                                        )}
                                                    </>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default CalendarStudent;