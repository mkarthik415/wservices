package wservices;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by karthikmarupeddi on 7/10/16.
 */

@RestController
public class GreetingController {

    @RequestMapping("/echo")
    public String echo()
    {
        return "Hello World";
    }
}
