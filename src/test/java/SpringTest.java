import com.xhh.myDecorate.ApplicationContext;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.mapper.DesignerMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SpringBootTest(classes = ApplicationContext.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class SpringTest {

    @Autowired
    DesignerMapper mapper;
    @Test
    public  void test () {
        Designer designer = new Designer();
        designer.setName("name");
        designer.setExperience("");
        designer.setSummary("");
        designer.setGrade("21");
        designer.setStyle("12");
        designer.setWorks("12");
        designer.setImages("21");
        designer.setId(1L);
        Long id = 1L;
        String title = "cdshi";
        String imageUrl = "cdshi";
        Long caseId = 1L;
        mapper.update(id,title,imageUrl,caseId);

    }

}
