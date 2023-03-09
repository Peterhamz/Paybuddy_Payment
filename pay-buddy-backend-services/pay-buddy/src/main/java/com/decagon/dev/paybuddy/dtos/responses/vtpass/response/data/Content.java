package com.decagon.dev.paybuddy.dtos.responses.vtpass.response.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Content {
    public String ServiceName;
    public String serviceID;
    public String convinience_fee;
    public List<Varation> varations;
}
